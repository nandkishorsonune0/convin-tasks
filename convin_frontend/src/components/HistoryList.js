import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';

const { Text } = Typography;

const HistoryList = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history data from backend
    const fetchHistory = async () => {
      const response = await fetch('/api/history');
      const data = await response.json();
      setHistory(data);
    };

    fetchHistory();
  }, []);

  return (
    <List
      header={<div>History</div>}
      bordered
      dataSource={history}
      renderItem={(item) => (
        <List.Item>
          <Text strong>{item.cardName}</Text>
          <Text>{item.link}</Text>
          <Text type="secondary">{item.playedAt}</Text>
        </List.Item>
      )}
    />
  );
};

export default HistoryList;
