import styles from "./page.module.css";
import Metric from "@/components/metric/metric";
export default function Home() {
  return (
    <div className={styles.metrics}>
      <Metric title="Created Tickets" amount="24,208" measure={-5}/>
      <Metric title="Unsolved Tickets" amount="4,564" measure={2}/>
      <Metric title="Resolved Tickets" amount="18,208" measure={8}/>
      <Metric title="Average First Time Reply" amount="12:01min" measure={8}/>
    </div>
    
  );
}

