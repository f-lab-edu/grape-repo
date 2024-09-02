import { useAuth } from '@/entities/auth';
import { sendChatMessage, useMessagesQuery } from '@/features/chat';
import useRealTimeMessages from '@/features/chat/hooks/useRealTimeMessages';
import { type MessageType, PageLayout } from '@/shared';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import * as stylex from '@stylexjs/stylex';
import { useLocation, useParams, useRouter } from '@tanstack/react-router';
import { Input } from 'antd';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState('');

  const router = useRouter();
  const location = useLocation();
  const { chatId } = useParams({ strict: false });
  const queryParams = new URLSearchParams(location.search);
  const friendName = queryParams.get('friendName') || '';

  const { userId } = useAuth();
  const realTimeMessages = useRealTimeMessages(chatId);
  const {
    data: initialMessages,
    isLoading,
    isError,
  } = useMessagesQuery(chatId);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (userId) {
        await sendChatMessage(chatId, userId, newMessage);
        setNewMessage('');
      }
    },

    [chatId, userId, newMessage],
  );

  const renderedMessages = useMemo(
    () =>
      messages.map((message) => (
        <li
          {...stylex.props(
            styles.list,
            message.user_id === userId ? styles.user : styles.friend,
          )}
          key={message.id}
        >
          {message.body}
        </li>
      )),
    [messages, userId],
  );

  useEffect(() => {
    if (!isLoading && messagesEndRef.current && messages) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isLoading, messages]);

  useEffect(() => {
    if (initialMessages) {
      setMessages([...initialMessages, ...realTimeMessages]);
    }
  }, [initialMessages, realTimeMessages]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) {
    return <p>Error loading messages</p>;
  }

  return (
    <div {...stylex.props(styles.box)}>
      <div {...stylex.props(styles.flex, styles.bottomGrey)}>
        <ChevronLeftIcon
          width={30}
          height={30}
          cursor={'pointer'}
          onClick={() => router.history.back()}
        />
        <div {...stylex.props(styles.center, styles.flex)}>
          <h3>{friendName}</h3>
        </div>
      </div>

      <div>
        <ul {...stylex.props(styles.ul)} onScroll={handleScroll}>
          {messages.map((message) => (
            <li
              {...stylex.props(
                styles.list,
                message.user_id === userId ? styles.user : styles.friend,
              )}
              key={message.id}
            >
              {message.body}
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>

        <form onSubmit={handleSubmit} {...stylex.props(styles.form)}>
          <Input
            styles={{
              input: {
                padding: '10px 15px',
                border: 'none',
                borderRadius: '26px',
                backgroundColor: 'rgba(220, 201, 235, 0.2)',
              },
            }}
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default memo(ChatRoom);

const styles = stylex.create({
  box: {
    height: '100%',
    overflow: 'hidden',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },

  bottomGrey: {
    padding: '24px',
    borderBottomWidth: '1px',
    borderBottomColor: '#dedede',
    borderBottomStyle: 'solid',
  },

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '0 24px',
    height: '460px',
    overflow: 'auto',
  },

  center: {
    width: '100%',
    justifyContent: 'center',
  },

  list: {
    width: 'fit-content',
    padding: '10px 15px',
    borderRadius: '30px',
    overflowWrap: 'break-word',
  },

  user: {
    marginLeft: 'auto',
    backgroundColor: '#FEFEFF',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#DCC9EB',
  },

  friend: {
    backgroundColor: '#DCC9EB',
  },

  form: {
    display: 'flex',
    gap: '10px',
  },
});
