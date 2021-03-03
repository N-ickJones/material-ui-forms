import { Box, Divider, Grid, Paper, TextField, Typography} from '@material-ui/core';
import { getRandomInt, PrintButton } from 'material-ui-forms';
import React from 'react';
import { useMuiPrinting } from './components/useMuiPrinting';


export default function PrintDocument() {
    const [ paperStyle, printComponentRef, printMode, displayPrint, handlePrintRef ] = useMuiPrinting();

    let refIndex = 0;

    const printRef = () => {
        const func = handlePrintRef(refIndex);
        refIndex += 1;
        return func;
    }

    function SubHeader(props: {title: string}) {
        return (
          <Grid item xs={12} ref={printRef()}>
            <Box mt={3}><Typography variant="h6">{props.title}</Typography></Box>
            <Box width="100%" mb={2}><Divider /> </Box>
          </Grid>
        )
    }

    return (
        <Grid>
            <PrintButton displayPrint={displayPrint} />
            <Paper ref={printComponentRef} style={paperStyle}>
                <Box m={printMode ? 0 : 2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} ref={printRef()}>
                        <Typography variant="h4" align="center">BRIDGE Hospice Employment Application</Typography>
                        <Typography>Date: {"2019/04/12"}</Typography>
                    </Grid>
                    {Array(100).fill("").map((item: any, index: number) => {
                        if ((index % 10) === 0) {
                            return (
                                <SubHeader key={index} title={`${index}`} />
                            )
                        }
                        else {
                            return (
                                <Grid item key={index} xs={getRandomInt(1, 12) as any} ref={printRef()}>
                                    <TextField 
                                        fullWidth 
                                        label={`label${index}`} 
                                        value={`value${index}`}
                                        style={{height: getRandomInt(30, 90)}}
                                        variant="outlined"
                                    />
                                </Grid>
                            )
                        }
                    })}
                </Grid>
                </Box>
            </Paper>
        </Grid>
    );
}
