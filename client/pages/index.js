import buildClient from '../api/build-client';

const FirstPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>First page</h1>;
};

FirstPage.getInitialProps = async (context) => {
  const client = buildClient(context);

  const { data } = await client.get('/api/users/currentuser');
  return data;
};

export default FirstPage;
