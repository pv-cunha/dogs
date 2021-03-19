import React from 'react';
import Head from '../Helper/Head';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFetch from '../../Hooks/useFetch';
import { GET_STATS } from '../../api';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token');

      const { url, options } = GET_STATS(token);

      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
