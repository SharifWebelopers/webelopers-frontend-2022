import ScoreReport from "../ScoreReport";
import styles from "./Scores.module.scss";

const Scores = () => {
    return (
        <div className={styles.scores}>
            <ScoreReport />
            <ScoreReport />
            <ScoreReport />
        </div>
    )
}

export default Scores;

