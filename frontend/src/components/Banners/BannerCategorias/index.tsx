import React from 'react';
import styles from './styles.module.scss';

interface Props {
  categoria: string;
  titulo: string;
  descricao: string;
}

export function BannerCategorias({ categoria, titulo, descricao }: Props) {
  return (
    <div className={`${styles.container} ${styles[`bg-${categoria}`]}`}>
      <div>
        <p className={styles.titulo}>{titulo}</p>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );
}
