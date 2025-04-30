import styles from "./page.module.css";
import Metric from "@/components/metric/metric";
import Navbar from "@/components/navbar/navbar";
import { TableProps } from "@mui/material";
import { Table, Select } from "antd";

export default function Home() {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      objective: '10 Downing Street',
      status: 'Closed',
      entry: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias quam quibusdam odit non voluptate, harum, distinctio provident voluptatum nemo atque expedita beatae nam odio. Iusto atque numquam accusamus libero.'

    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      objective: '10 Downing Street',
      status: 'Open',
      entry: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias quam quibusdam odit non voluptate, harum, distinctio provident voluptatum nemo atque expedita beatae nam odio. Iusto atque numquam accusamus libero.'
    },
    
    {
      key: '3',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      objective: '10 Downing Street',
      status: 'Open',
      entry: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias quam quibusdam odit non voluptate, harum, distinctio provident voluptatum nemo atque expedita beatae nam odio. Iusto atque numquam accusamus libero.'
    },
    
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      objective: '10 Downing Street',
      status: 'Open',
      entry: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestias quam quibusdam odit non voluptate, harum, distinctio provident voluptatum nemo atque expedita beatae nam odio. Iusto atque numquam accusamus libero.'
    }
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Objective',
      dataIndex: 'objective',
      key: 'objective',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Entry',
      dataIndex: 'entry',
      key: 'entry',
    }
  ];

  
  return (
    <div className={styles.main}>
      <Navbar/>
      {/* <div className={styles.navbar}>
          <Image
            className={styles.logo}
            src="/logo/goodyear-logo-yellow.png"
            width={120}
            height={20}
            alt="Goodyear logo"
          />
          
      </div>   */}
      <div className={styles.mainContainer}>
        <div className={`${styles.metrics} ${styles.subContainer}`}>
          <Metric title="Created Tickets" amount="24,208" measure={-5}/>
          <Metric title="Unsolved Tickets" amount="4,564" measure={2}/>
          <Metric title="Resolved Tickets" amount="18,208" measure={8}/>
          <Metric title="Average First Time Reply" amount="12:01min" measure={8}/>
          
        </div>
        <div className={`${styles.subContainer} ${styles.filters}`}>
          <div className={styles.box}>1</div>
          <div className={styles.box}>2</div>
          <div className={styles.box}>3</div>
          <div className={styles.box}>4</div>
          <div className={styles.box}>5</div>
          <div className={styles.box}>6</div>
          <div className={styles.box}>7</div>
          <div className={styles.box}>8</div>
        </div>

        <div className={styles.subContainer}>
          <Table dataSource={dataSource} columns={columns} scroll={{x:1200}}/>
        </div>
      </div>
      
    </div>
    
  );
}

