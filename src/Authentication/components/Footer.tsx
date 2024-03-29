import React from 'react';
import SocialLogin from "./SocialLogin";
import {Box, Text} from "../../components";
import {BorderlessButton} from "react-native-gesture-handler";

interface FooterProps {
    title: string;
    action: string;
    onPress: () => void;
}

const Footer = ({title, action, onPress}: FooterProps) => {
    return (
        <>
            <SocialLogin/>
            <Box alignItems={"center"} marginTop={"m"}>
                <BorderlessButton {...{onPress}}>
                    <Text variant={"button"} color={"background"}>
                        <Text>{`${title} `}</Text>
                        <Text color={"primary"}>{action}</Text>
                    </Text>
                </BorderlessButton>
            </Box>
        </>
    );
};

export default Footer;
