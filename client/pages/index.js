import buildClient from '../api/build-client';

const FirstPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are logged in</h1>
  ) : (
    <h1>You are not logged in</h1>
  );
};

FirstPage.getInitialProps = async (context) => {
  const client = buildClient(context);

  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default FirstPage;
