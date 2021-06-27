import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';
import { Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import Layout from '../../../common/components/layout/Layout';
import useQuery from '../../../common/hooks/useQuery';
import { ExplanationProps, FrontMatterProperties } from './Explanation.types';
import If from '../../../common/components/if/If';
import useExplanationRoute from '../../../common/hooks/useExplanationRoute';

const Explanation: React.FC<ExplanationProps> = (props) => {
  const [text, setText] = useState<string>('');
  const [frontMatter, setFrontMatter] = useState<FrontMatterProperties>();

  const history = useHistory();
  const mdId = useQuery('id');
  const explanationRoute = useExplanationRoute();

  useEffect(() => {
    import(`../../../res/text/${mdId}.md`)
      .then((mdFile) => {
        fetch(mdFile.default)
          .then((res) => res.text())
          .then((mdFileText) => {
            const r = fm<FrontMatterProperties>(mdFileText);
            setFrontMatter(r.attributes);
            setText(r.body);
          });
      })
      .catch((e) => {
        console.error(`Error loading .md file: ${e}`);
        setText('Something went wrong!');
      })
      .finally(() => {
        console.log(`Sucesfully loaded ${mdId.split('/')[1]}.md file`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frontMatter?.nextId, mdId]);

  return (
    <Layout>
      <ReactMarkdown>{text}</ReactMarkdown>
      <If ifTrue={!frontMatter?.isLastInModule}>
        <Button
          primary
          label={frontMatter?.buttonLabel}
          onClick={() =>
            history.push(`${explanationRoute}?id=${frontMatter?.nextId}`)
          }
        />
      </If>
      <If ifTrue={!frontMatter?.nextId}>
        <Button
          primary
          label='Finish module'
          onClick={() =>
            history.push(`/congratulations?module=${frontMatter?.module}`)
          }
        />
      </If>
    </Layout>
  );
};

export default Explanation;
