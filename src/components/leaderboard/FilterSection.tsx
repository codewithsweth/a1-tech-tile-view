import React from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  InputAdornment,
  Typography
} from '@mui/material';
import { 
  FilterList as FilterIcon, 
  GridView as Grid3X3Icon, 
  Search as SearchIcon,
  List as ListIcon 
} from '@mui/icons-material';

interface FilterSectionProps {
  setLayoutView: (view: string) => void;
}

export default function FilterSection({ setLayoutView }: FilterSectionProps) {
  const [layout, setLayout] = React.useState('tiles');

  const handleLayoutChange = (event: any) => {
    const newLayout = event.target.value;
    setLayout(newLayout);
    setLayoutView(newLayout);
  };

  return (
    <Box
      sx={{
        p: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'sticky',
        top: '106px',
        zIndex: 10,
        backgroundColor: '#372e2e',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          height: '48px',
          alignItems: 'center',
          gap: 1.5,
          px: 1,
          py: '7px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'Work Sans, Helvetica',
              fontWeight: 500,
              color: '#fafafa',
              fontSize: '12px',
              letterSpacing: '0.10px',
              lineHeight: '20px',
            }}
          >
            LAYOUT
          </Typography>

          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              value={layout}
              onChange={handleLayoutChange}
              sx={{
                height: '26px',
                backgroundColor: '#18181a',
                border: '1px solid black',
                borderRadius: 1,
                color: '#fafafa',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-icon': {
                  color: '#fafafa',
                },
              }}
            >
              <MenuItem value="tiles">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Grid3X3Icon sx={{ width: 12, height: 12 }} />
                  Tiles
                </Box>
              </MenuItem>
              <MenuItem value="list">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <ListIcon sx={{ width: 12, height: 12 }} />
                  List
                </Box>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: '308px',
            height: '38px',
            alignItems: 'center',
            gap: 1.25,
            backgroundColor: '#6a6a71',
            borderRadius: 1,
            border: '1px solid black',
            overflow: 'hidden',
          }}
        >
          <TextField
            placeholder="Find a technician"
            variant="outlined"
            size="small"
            sx={{
              flex: 1,
              '& .MuiOutlinedInput-root': {
                border: 'none',
                backgroundColor: 'transparent',
                color: '#fafafa',
                height: '38px',
                '& fieldset': {
                  border: 'none',
                },
                '& input::placeholder': {
                  color: '#fafafa',
                  opacity: 1,
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ width: 18, height: 18, color: '#fafafa' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'flex-end',
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              height: '27px',
              backgroundColor: 'black',
              border: '1px solid black',
              borderRadius: 1,
              color: '#fafafa',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              },
              textTransform: 'none',
            }}
            endIcon={<FilterIcon sx={{ width: 12, height: 12 }} />}
          >
            <Typography
              sx={{
                fontFamily: 'Work Sans, Helvetica',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              Filters
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}