import {useState} from 'react'
import { Card, CardContent,Typography,Grid,CardActions,Button,Dialog,DialogTitle,DialogContent,DialogActions} from '@material-ui/core'
import {getMatchScore} from '../API/Api'
const Match = ({match}) => {
const [MD,setMD]=useState({})
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const showDialog=()=>{
    getMatchScore(match.unique_id).then((res)=>setMD(res)).catch((err)=>console.log(err))
    console.log(MD);
    handleClickOpen()
}

    return (
        <div>
        <Card variant='outlined' style={{marginTop:'20px'}}>
            <CardContent>
            <Grid container justify='center' alignItems='center'  spacing={4}>
                <Grid item>
                 <Typography>{match['team-1']}</Typography>
                </Grid>
                <Grid item>
                <Typography>vs</Typography>
                </Grid>
                <Grid item>
                <Typography>{match['team-2']}</Typography>
                </Grid>
            </Grid>
            </CardContent>
            <CardActions>
                <Grid container justify='center' alignItems='center'>
                    <Button variant='outlined' color='primary' style={{marginRight:'10px'}} onClick={()=>{
                       showDialog()
                    }} >Show More</Button>
                    <Button variant='outlined' color='primary'>
                        Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                    </Button>
                </Grid>
            </CardActions>
        </Card>


       <Dialog onClose={handleClose} open={open}>
        <DialogTitle onClose={handleClose}>
                    Match Details..
        </DialogTitle>
        <DialogContent>
            <Typography>
                    {MD.stat}
            </Typography>
            <Typography>
                Match
                    {MD.matchStarted?" Started":" Still not started"}
            </Typography>
            <Typography>
                {"Score: "}
                    {MD.score?MD.score:"not available"}
            </Typography>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
       </Dialog>
        </div>
    )
}

export default Match
