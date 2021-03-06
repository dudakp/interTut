import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import fm from 'front-matter';
import { Box, Button } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from '../../../common/components/layout/Layout';
import useQuery from '../../../common/hooks/useQuery';
import { ExplanationProps, FrontMatterProperties } from './Explanation.types';
import If from '../../../common/components/if/If';
import useExplanationRoute from '../../../common/hooks/useExplanationRoute';
import useLocalStorageState from '../../../common/hooks/useLocalStorageState';

const addUnique = (old: any[], mdId: string) => {
  return Array.from(new Set([...old, mdId]));
};

const Explanation: React.FC<ExplanationProps> = () => {
  const [text, setText] = useState<string>('');
  const [frontMatter, setFrontMatter] = useState<FrontMatterProperties>();
  const [startedModules, setStartedModules] = useLocalStorageState<string[]>(
    'startedModules',
    []
  );
  const [finishedModules, setFinishedModules] = useLocalStorageState<string[]>(
    'finishedModules',
    []
  );

  const history = useHistory();
  const mdId = useQuery('id');
  const { isAuthenticated } = useAuth0();
  const explanationRoute = useExplanationRoute();

  const handleSubmitArticleStarted = () => {
    console.log(frontMatter);
  };

  useEffect(() => {
    if (!isAuthenticated) {
      setStartedModules((old) => addUnique(old, mdId));
    } else {
      handleSubmitArticleStarted();
    }
    // eslint-disable-next-line
  }, [mdId]);

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
      <Box direction='column'>
        {/* <StyledMain fill='vertical'> */}
        <ReactMarkdown>{text}</ReactMarkdown>
        <If ifTrue={!frontMatter?.isLastInModule}>
          <Button
            primary
            label={frontMatter?.buttonLabel}
            onClick={() => {
              setFinishedModules((old) => addUnique(old, mdId));
              history.push(`${explanationRoute}?id=${frontMatter?.nextId}`);
            }}
          />
        </If>
        <If ifTrue={!frontMatter?.nextId}>
          <Button
            primary
            label='Finish module'
            onClick={async () => {
              setFinishedModules((old) => addUnique(old, mdId));
              await new Promise((r) => setTimeout(r, 100));
              history.push(`/congratulations?module=${frontMatter?.module}`);
            }}
          />
        </If>
        {/* </StyledMain> */}
      </Box>
    </Layout>
  );
};

export default Explanation;
