/*
 * @Description: 
 * @Version: 1.0
 * @Author: shenkai03
 * @Date: 2024-06-04 21:03:51
 * @LastEditors: shenkai03
 * @LastEditTime: 2024-06-05 12:45:16
 * @FilePath: /siteman/client/src/app/page.tsx
 * Copyright (C) 2024 shenkai03. All rights reserved.
 */
'use client'

import { Box, Text, Button, Grid, Container } from '@radix-ui/themes';
import { useEffect, useState } from 'react';

type Obj = {
  id: number;
  title: string;
  description: string;
}

export default function Home({ params = false }) {
  const [showText, setShowText] = useState<Obj>({ id: 0, title: '', description: '' })
  useEffect(() => {
    if (params) getObj()
  }
    , [params]
  )
  const getObj = async () => {
    fetch('http://localhost:4000/read').then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json()
    }).then(data => {
      setShowText(data)
    })
  }

  const updateObj = (obj: Obj) => {
    fetch('http://localhost:4000/update', {
      method: 'POST',
      body: JSON.stringify(obj)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json()
    }).then(data => {
      setShowText(data)
    })
  }


  const createObj = (obj: Obj) => {
    fetch('http://localhost:4000/create', {
      method: 'POST',
      body: JSON.stringify(obj)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json()
    }).then(data => {
      setShowText(data)
    })
  }

  const deleteObj = (id: Obj['id']) => {
    fetch('http://localhost:4000/delete', {
      method: 'POST',
      body: JSON.stringify({ id })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json()
    }).then(data => {
      setShowText(data)
    })
  }

  const { id, title, description }: Obj = showText

  return (
    <Grid columns="1" rows="repeat(2,300px)" >
      <Box style={{ background: 'var(--gray-a2)', borderRadius: 'var(--radius-3)',textAlign:'center' }}>
        <Text size="3" as='div' >ID:{id}</Text>
        <Text size="3" as='div'>title:{title}</Text>
        <Text size="3" as='div'>description:{description}</Text>
      </Box>
      <Box style={{display:'flex', justifyContent:'center'}}>
        <Button color='blue' onClick={getObj}> Read(id:1)</Button>
        <Button color='green' onClick={() => createObj({ id: 2, title: 'testing', description: 'new testing' })}>Create(id:2)</Button>
        <Button color='yellow' onClick={() => updateObj({ id: 1, title: 'new testing', description: 'new testing ' })}>Update(id:1)</Button>
        <Button color='ruby' onClick={() => deleteObj(1)}>Delete(id:1)</Button>
      </Box>
    </Grid>
  );
}
