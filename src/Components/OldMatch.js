import {Card,CardContent,Grid,Typography} from '@material-ui/core'

const OldMatch = ({match}) => {
    return (
    <>
           <Card variant='outlined' style={{marginTop:'20px'}}>
            <CardContent>
            <Grid container justify='center' alignItems='center'  spacing={4}>
                <Grid item>
                <Typography>{match.description}</Typography>
                </Grid>
            </Grid>
            </CardContent>
            </Card>
            </>
    )
}

export default OldMatch
