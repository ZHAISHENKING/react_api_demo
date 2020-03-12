import router from "umi/router";
import styles from './about.css';

export default function() {
  return (
    <div className={styles.normal}>
      <p onClick={()=>{router.goBack()}}>点击返回</p>
      <h1>关于我</h1>
    </div>
  );
}
