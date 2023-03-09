import TextField from "@mui/material/TextField";

export const UserInput = (props: any) => {
    return(
        <TextField {...props}
        margin="normal"
        required
        fullWidth
        id="email"
        label="E-mail"
        name="email"
        autoComplete="email"
        autoFocus
        sx={{ backgroundColor: '#fff' }} />
    )
}