import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          Rick and Morty Quiz
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Widget.DivInput>
              <form onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <input
                  onChange={function (e) {
                    setName(e.target.value);
                  }}
                  placeholder="Preencha seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                </button>
              </form>
            </Widget.DivInput>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p><a href="quiz">Quiz do coleguinha</a></p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/douglasdiasr3" />
    </QuizBackground>
  );
}
