import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widgets/index';
import QuizBackground from '../src/components/QuizBackground/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubConer/index';
import QuizLogo from '../src/components/QuizLogo/index';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <QuizBackground backgroundImage={db.bgQuizColega}>
       <Head>
        <title>
          Rick and Morty Quiz - Desafiante {name}
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Content>
            <h1>Quiz #1</h1>
            <p>Olá <Widget.SpanDestaque>{name}</Widget.SpanDestaque></p>
            <p>Vamos ver se você realmente conheçe Rick And Morty. Boa sorte !!!</p>
            <p><a href="/">Voltar</a></p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/douglasdiasr3" />
    </QuizBackground>
  );
}
