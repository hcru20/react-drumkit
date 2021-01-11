import React, { useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import styled from 'styled-components';
import useSound from 'use-sound';
import boom from '../sounds/boom.wav';
import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tink from '../sounds/tink.wav';
import tom from '../sounds/tom.wav';

const StyledDrumkitContainer = styled(Grid)`
  position: fixed;
  top: 500px;
  left: 10px;
`;

export const Drumkit = () => {
  useEffect(() => {
    const onKeydown = event => {
      const { key } = event;
      console.log(key)
      playSound(key)
    };
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  });
  
  const [playBoom] = useSound(boom);
  const [playClap] = useSound(clap);
  const [playHihat] = useSound(hihat);
  const [playKick] = useSound(kick);
  const [playOpenhat] = useSound(openhat);
  const [playRide] = useSound(ride);
  const [playSnare] = useSound(snare);
  const [playTink] = useSound(tink);
  const [playTom] = useSound(tom);

  const playSound = key => {
    if (key === 'a') { playBoom() };
    if (key === 's') { playTink() };
    if (key === 'd') { playTom() };
    if (key === 'f') { playRide() };
    if (key === 'g') { playHihat() };
    if (key === 'h') { playSnare() };
    if (key === 'j') { playTom() };
    if (key === 'k') { playClap() };
    if (key === 'l') { playKick() };
  };

 return (
 <StyledDrumkitContainer container spacing={4}>
   <Grid item xs={3}>
   {/* #TODO: change buttons styling when a key is selected */}
    <Button variant="contained" onClick={playOpenhat}>
      {'Open hat [A]'}
    </Button>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" onClick={playTink}>
      {'808 [S]'} 
    </Button>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" onClick={playTom}>
      {'Med tom [D]'}
    </Button>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" onClick={playRide}>
      {'Ride cymbal [F]'}
    </Button>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" onClick={playHihat}>
      {'Hi hat [G]'}
    </Button>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" onClick={playSnare}>
     {'Snare [H]'}
    </Button>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" onClick={playTom}>
      {'Floor tom [J]'}
    </Button>
   </Grid>
   <Grid item xs={3}>
    <Button variant="contained" onClick={playClap}>
      {'Clap[K]'}
    </Button>
   </Grid>
   <Grid item xs={12}>
    <Button variant="contained" onClick={playKick}>
      {'Bass pedal [L]'}
    </Button>
   </Grid>
 </StyledDrumkitContainer>
 );
};

export default Drumkit;