import ColumnCard from './Column';
import { columnData } from '../../data/columnData';
import styles from './MainContainer.module.css';

export default function MainContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {columnData.map((column) => (
          <ColumnCard
            key={column.id}
            title={column.title}
            content={column.content}
          />
        ))}
      </div>
    </div>
  );
}