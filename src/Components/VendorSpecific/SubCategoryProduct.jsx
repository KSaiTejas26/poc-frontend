import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    fontSize: '25px',
    backgroundColor: '#FAFAFA',


  }
  return (
    <div>

      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 300,
            sm: 300, // You can adjust this value to match your desired screen size
            md: 960, // You can adjust this value to match your desired screen size
            lg: 1280, // You can adjust this value to match your desired screen size
            xl: 1920},
          bgcolor: 'background.paper',
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '30px',
          marginBottom: '30px'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },

          }}

        >
          <Tab sx={style} label="Home" />
          <Tab sx={style} label="Sofas" />
          <Tab sx={style} label="Sectional Sofas" />
          <Tab sx={style} label="Chairs" />
          <Tab sx={style} label="Wardrobes" />
          <Tab sx={style} label="Beds" />
          <Tab sx={style} label="Side Tables" />
          <Tab sx={style} label="Settees and Benches" />
          <Tab sx={style} label="Centre Tables" />
          <Tab sx={style} label="Study Tables" />
          <Tab sx={style} label="Dressing Tables" />
          <Tab sx={style} label="Sofa Cum Beds" />
          <Tab sx={style} label="Book Shelves" />
          <Tab sx={style} label="Office Furniture" />

        </Tabs>
      </Box>
      <div className="banner">
                <div>
                    <img width="75%" src=''></img>
                </div>

            </div>
    </div>
  );
}
