import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { usePagination } from '../../hooks/usePagination';
import generateUrlParamsMarvelApi from '../../utils/generateUrlParamsMarvelApi';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Card from '../../components/Card';
import CardGrid from '../../components/CardGrid';

import * as S from './styles';

interface Comic {
  id: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
}

function Home() {
  const [comics, setComics] = useState<Comic[]>([]);

  const { nextPage, offset } = usePagination();

  useEffect(() => {
    async function loadData() {
      try {
        const updatedComics = [...comics];

        const response = await api.get(
          `/comics?offset=${offset}&${generateUrlParamsMarvelApi()}`
        );

        response.data.data.results.forEach((comic: any) => {
          updatedComics.push({
            id: comic.id,
            thumbnail: comic.thumbnail,
            title: comic.title,
          });
        });

        setComics([...updatedComics]);
      } catch (err) {
        console.log(err);
      }
    }

    loadData();
  }, [offset]);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Input type="text" placeholder="Buscar pelo nome do quadrinho" />

        <CardGrid>
          {comics.map((item: Comic) => (
            <Card
              key={item.id}
              imgUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              title={item.title}
            />
          ))}
        </CardGrid>

        <Button onClick={() => nextPage(comics.length)} title="Carregar Mais" />
      </S.Content>
    </S.Container>
  );
}

export default Home;
