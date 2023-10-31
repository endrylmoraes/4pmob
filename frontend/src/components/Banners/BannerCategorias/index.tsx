import styles from "./styles.module.scss";

interface Props {
  categoria: string;
  titulo: string;
  descricao: string;
}

export const BannerCategorias = ({
  categoria,
  titulo,
  descricao,
}: Props): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles[`bg-${categoria}`]}`}>
      <div>
        <p className={styles.titulo}>{titulo}</p>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );
};
