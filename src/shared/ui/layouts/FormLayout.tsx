import { ButtonBoxLayout, DefaultButton } from '@/shared';
import * as stylex from '@stylexjs/stylex';
import { Form, type FormInstance } from 'antd';
import { memo, useEffect, useState } from 'react';

type FormLayoutProps = {
  children: React.ReactNode;
  form: FormInstance<unknown>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  buttonCommand: string;
};

const FormLayout = ({
  children,
  form,
  onClick,
  buttonCommand,
}: FormLayoutProps) => {
  const [submittable, setSubmittable] = useState<boolean>(false);
  const values = Form.useWatch([], form);

  useEffect(() => {
    if (values) {
      form
        .validateFields({ validateOnly: true })
        .then(() => setSubmittable(true))
        .catch(() => setSubmittable(false));
    }
  }, [form, values]);

  return (
    <Form form={form} {...stylex.props(styles.box)}>
      <div {...stylex.props(styles.box)}>{children}</div>

      <ButtonBoxLayout>
        <DefaultButton
          command={buttonCommand}
          onClick={onClick}
          type="submit"
          disabled={!submittable}
        />
      </ButtonBoxLayout>
    </Form>
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
