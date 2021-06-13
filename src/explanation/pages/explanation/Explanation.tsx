import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ExplanationProps } from './Explanation.types';
import Layout from '../../../common/components/layout/Layout';
import useQuery from '../../../common/hooks/useQuery';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hello from '../../../res/text/intro/0_hello.md';

const Explanation: React.FC<ExplanationProps> = (props) => {
  const [text, setText] = useState('');
  // const userInfo = useUserInfo();
  const queryParams = useQuery();

  useEffect(() => {
    fetch(hello)
      .then((res) => res.text())
      .then((t) => setText(t));
  }, [queryParams, text]);

  return (
    <Layout>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Layout>
  );
};

export default Explanation;
