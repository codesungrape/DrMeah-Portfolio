import styles from './Column.module.css'; // ✅ Import the CSS module

export default function ColumnCard({ title, content}) {
    return (
        <div className={styles.column}>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}