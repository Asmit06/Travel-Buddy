import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles'

export default makeStyles(() => ({
  formControl: {
    margin: useTheme().spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: useTheme().spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));