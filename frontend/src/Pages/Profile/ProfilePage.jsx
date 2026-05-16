import React from 'react'
import { Container, Stack, Avatar, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { getName, getUserAvatar, getIsLoggedIn } from '../../redux/slices/User';

export default function ProfilePage() {
    const name = useSelector(getName);
    const avatar = useSelector(getUserAvatar);
    const isLoggedIn = useSelector(getIsLoggedIn);
    
    if (!isLoggedIn) {
        return (
            <Container>
                <Stack h={300} bg="var(--mantine-color-body)" align="center" justify="center" gap="lg">
                    <Text size="lg" fw={500}>Please login first</Text>
                </Stack>
            </Container>
        );
    }
    
    return (
        <Container>
            <Stack
                h={300}
                bg="var(--mantine-color-body)"
                align="center"
                justify="center"
                gap="lg"
            >
                <Avatar src={avatar || 'https://avatar.iran.liara.run/public'} size={150} radius={150} alt="it's me" />
                <Text size="xl" fw={500}>{name || 'User'}</Text>
                <Text>Welcome to your profile</Text>
            </Stack>
        </Container>
    )
}