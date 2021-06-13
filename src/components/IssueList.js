import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IssueItem from './IssueItem';
import axios from 'axios'

const IssueListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  margin-top: 2rem;

  .title{
    font-weight: normal;
    text-align: center;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

const IssueList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.github.com/organizations');
        console.log(response.data);
      }
      catch (e) {
        console.log(e)
      }
      setLoading(false)
    };
    fetchData();
  }, []);

  if(loading) {
    return <IssueListBlock>Loading...</IssueListBlock>
  }

  if(!articles) {
    return null;
  }

  return (
    <IssueListBlock>
      <h1 className="title">Angular / Angular-cli</h1>
      {articles.map(article => (
        <IssueItem key={article.id} article={article}/>
      ))}
    </IssueListBlock>
  );
};

export default IssueList;