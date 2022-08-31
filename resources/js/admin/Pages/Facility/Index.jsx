import React from 'react'
import { Container, Button } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons";
import { Link } from "react-router-dom";
import PageHeader from "@/admin/Components/Page/PageHeader";
import { SmartTable } from "@/admin/Components/SmartTable";

const Index = () => {
    return (
        <Container fluid>
            <PageHeader>
                <Button
                    leftIcon={<IconTrash />}
                    gradient={{ from: 'orange', to: 'red' }}
                    variant="gradient"
                >
                    Xóa
                </Button>
                <Button
                    leftIcon={<IconPlus />}
                    color="indigo"
                    component={Link}
                    to={`/admin/manage/facility/new`}
                >
                    Thêm
                </Button>
            </PageHeader>
            <SmartTable />
        </Container>
    )
}

export default Index
