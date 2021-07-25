import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



function Dados(){
  return(
    <Typography variant='body2' color='textSecondary' align='center'>
      {'made with <3 from Matheus Cavalcante'} <br />
      <Link color='inherit' href='github.com/cavalcant3' target="_blank">
        Visite meu github.
      </Link>
    </Typography>
  );
}

//classes de estilos
const useStyles = makeStyles((theme) =>({
  paper:{
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
  },
  avatar: {
    margin:theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
     marginTop: theme.spacing(3, 0, 2),
  },
}));


export default function Login(){
  
  const classes = useStyles();
  
  return(
    <Container component='main' maxWidth='xs'>
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Entrar
      </Typography>
      {/* campo de formulário */}
      <form className={classes.form} noValidate>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Informe seu email'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField 
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='senha'
          label='Informe sua senha'
          type='passowrd'
          id='password'
          autoComplete='current-password'
        />
        {/* validação */}
         {/* <FormControlLabel 
          control={<CheckBox value="" color='primary' />}
          label='Lembrar senha' 
        />  */}

        <Button 
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
        Entrar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href='#' variant="body2">
              {"Não tem conta? inscreva-se"}
            </Link>
          </Grid>
        </Grid>

      </form>
    </div>
    <Box mt={8}>
      <Dados />
    </Box>
    </Container>
  );
}

