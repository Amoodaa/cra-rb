import React from 'react';
import { Helmet } from 'react-helmet-async';
import { P, Title, Wrapper } from './subcomponents';

export const NotFoundPage: React.FC = () => (
  <>
    <Helmet>
      <title>404 Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>
    <Wrapper>
      <Title>
        4
        <span role="img" aria-label="Crying Face">
          😢
        </span>
        4
      </Title>
      <P>Page not found.</P>
    </Wrapper>
  </>
);
