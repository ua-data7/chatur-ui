"use client";

import {Button,Grid,Typography} from '@mui/joy';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Grid m={4} container spacing={3} direction="column">
        <Grid>
      <Link href="/instructor">
      <Button variant="soft">Instructor View</Button>
      </Link>
      </Grid>
      <Grid>
      <Link href="/student">
      <Button variant="soft">Student View</Button>
      </Link>
      </Grid>
      </Grid>
    </main>
  )
}
