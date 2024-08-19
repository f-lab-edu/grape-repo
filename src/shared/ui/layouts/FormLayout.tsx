import { ButtonBoxLayout, DefaultButton } from '@/shared';
import * as stylex from '@stylexjs/stylex';
import { type FormEventHandler, memo } from 'react';

type FormLayoutProps = {
  children: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  buttonOptions: {
    command: string;
    disabled: boolean;
  };
};

const FormLayout = ({ children, onSubmit, buttonOptions }: FormLayoutProps) => {
  return (
    <form {...stylex.props(styles.box)} onSubmit={onSubmit}>
      <div {...stylex.props(styles.box)}>{children}</div>

      <ButtonBoxLayout>
        ,
        <DefaultButton {...buttonOptions} type="submit" />
      </ButtonBoxLayout>
    </form>
  );
};

export default memo(FormLayout);

const styles = stylex.create({
  box: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingTop: '30px',
    gap: '20px',
  },
});
