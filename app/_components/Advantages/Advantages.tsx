import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import { LogoAdvantages } from '../LogoAdvantages';
export const Advantages: React.FC<AdvantagesProps> = ({ advantages }): JSX.Element => {
  return (
    <div>
      {advantages.map((p) => {
        return (
          <div key={p._id} className={styles.advantage}>
            <LogoAdvantages />
            <div className={styles.title}>{p.title}</div>
            <hr className={styles.vline} />
            <span>{p.description}</span>
          </div>
        );
      })}
    </div>
  );
};
