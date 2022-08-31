import React from "react";
import { Group, Grid, Button, UnstyledButton, Avatar, Text } from "@mantine/core";
import { IconArrowLeft, IconTrash, IconChevronLeft } from "@tabler/icons";

const PageHeader = ({children}) => {

    return (
        <Grid grow>
            <Grid.Col span={4}>
                <Group>
                    <Button
                        variant="subtle"
                        color="gray"
                        compact
                    >
                        <IconChevronLeft />
                    </Button>
                    <div>
                        <Text size="xs" color="dimmed">Trở về danh sách</Text>
                        <Text>Bob Handsome</Text>
                    </div>
                </Group>
            </Grid.Col>
            <Grid.Col span={4}>
                {/*<Grid justify="flex-end">*/}
                {/*    <Grid.Col span={3}>Add</Grid.Col>*/}
                {/*</Grid>*/}
                <Group position="right">
                    {children}
                </Group>
            </Grid.Col>
        </Grid>
    );
};

export default PageHeader;
