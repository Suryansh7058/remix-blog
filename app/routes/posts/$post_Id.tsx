import React from 'react';
import { useParams } from '@remix-run/react';

type Props = {};

const PostItem = (props: Props) => {
  const params = useParams();
  const id = params.post_Id;
  return (
    <p style={{ fontSize: '300%' }}>
      Post ID : -&gt; <strong>{id}</strong>
    </p>
  );
};

export default PostItem;
