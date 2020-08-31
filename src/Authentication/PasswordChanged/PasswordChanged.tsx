import React from 'react';
import {AuthenticationRoutes, AuthNavigationProps} from "../../components/Navigation";
import {Box, Button, Container, RoundedIcon, RoundedIconButton, Text, useTheme} from "../../components";

const SIZE = 80;

const PasswordChanged = ({navigation}: AuthNavigationProps<AuthenticationRoutes, "PasswordChanged">) => {

    const theme = useTheme();

    return (
        <Container
            pattern={0}
            footer={
                <Box flexDirection={"row"} justifyContent={"center"}>
                    <RoundedIconButton
                        name={"x"}
                        size={60}
                        color={theme.colors.secondary}
                        backgroundColor={"white"}
                        onPress={() => navigation.pop()}/>
                </Box>
            }>
            <Box alignSelf={"center"}>
                <RoundedIcon
                    name={"check"}
                    size={SIZE}
                    color={theme.colors.primary}
                    backgroundColor={"primaryLight"}/>
            </Box>
            <Text variant={"title1"} marginVertical={"l"} textAlign={"center"}>
                Your password was successfully changed
            </Text>
            <Text variant={"body"} textAlign={"center"} marginBottom={"l"}>
                Close this window and login again
            </Text>
            <Box alignItems={"center"} marginTop={"m"}>
                <Button
                    variant={"primary"}
                    label={"Login again"}
                    onPress={() => navigation.navigate("Login")}/>
            </Box>
        </Container>
    );
};

export default PasswordChanged;
