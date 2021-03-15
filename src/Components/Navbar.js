import {AppBar, IconButton, Toolbar,Typography,Tabs,Tab,Box} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {useState} from 'react'
import Match from './Match'
import OldMatch from './OldMatch'
import {Grid} from '@material-ui/core'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


const Navbar = ({matches,oldMatches}) => {

    const [value,setValue]=useState(0)

    const handleChange=(e,newValue)=>{
        setValue(newValue)
    }

    return (
        <div>
        <AppBar  position="static" color="primary">
        <Toolbar>
            <IconButton color="inherit">
                <MenuIcon style={{marginRight:'10px'}}/>
                <Typography variant="h4" >Cricky</Typography>
            </IconButton>
        </Toolbar>
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Tests"/>
            <Tab label="ODI" />
            <Tab label="Twenty20"/>
            <Tab label="old matches"  />
        </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
        <>
        <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>{matches.map((match)=><>{match.type==='Tests'?<Match key={match.unique_id} match={match}/>:''}</>)}</Grid>
        <Grid item sm={2}></Grid>
       </Grid>
        </>
        </TabPanel>


        <TabPanel value={value} index={1}>
        <>
        <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>{matches.map((match)=><>{match.type==='ODI'?<Match key={match.unique_id} match={match}/>:''}</>)}</Grid>
        <Grid item sm={2}></Grid>
       </Grid>
        </>
        </TabPanel>


        <TabPanel value={value} index={2}>
           <>
        <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>{matches.map((match)=><>{match.type==='Twenty20'?<Match key={match.unique_id} match={match}/>:''}</>)}</Grid>
        <Grid item sm={2}></Grid>
       </Grid>
        </>
        </TabPanel>

        <TabPanel value={value} index={3}>
           <>
        <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>{oldMatches.map((match)=>(<OldMatch key={match.unique_id} match={match}/>))}</Grid>
        <Grid item sm={2}></Grid>
       </Grid>
        </>
        </TabPanel>

        

        </div>
    )
}

export default Navbar
