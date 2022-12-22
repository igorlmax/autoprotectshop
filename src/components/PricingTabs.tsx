import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useTranslation } from 'react-multi-lang';

export default function PricingTabs({children1, children2, children3}: any) {
    const [value, setValue] = React.useState('1');
    const t = useTranslation();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList variant={'fullWidth'} onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label={t("pricing.essential")} value="1" />
                        <Tab label={t("pricing.basic")} value="2" />
                        <Tab label={t("pricing.premium")} value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">{children1}</TabPanel>
                <TabPanel value="2">{children2}</TabPanel>
                <TabPanel value="3">{children3}</TabPanel>
            </TabContext>
        </Box>
    );
}
