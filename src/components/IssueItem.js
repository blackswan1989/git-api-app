import React from 'react';
import styled from 'styled-components';

const IssueItemBlock = styled.div`
  .contents {
    border-bottom: 1px solid black;
    padding: 10px 0;
    
    h2 {
      margin-top: 0.5rem;
      padding: 0;

      a {
        color: black;
        text-decoration: none;
      }
    }

    p, span {
      margin: 0;
      line-height: 1.5;
      white-space: normal;
    }
  }
`;

const IssueItem = ({article}) => {
  const {id, login, url, description, repos_url} = article;

  return(
    <IssueItemBlock>
      <div className="contents">
        <h2>
          <a href={url} rel="noopener noreferrer">#{id} {login}</a>
        </h2>
        <div>
          <p>{description}</p>
          <span>{repos_url}</span>
        </div>
      </div>
    </IssueItemBlock>
  );
};

export default IssueItem;