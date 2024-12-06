  import {
    BackgroundImage,
    Box,
    Burger,
    Button,
    Divider,
    Drawer,
    Group,
    ScrollArea,

  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import logo from '../../assets/logo.svg'
  import classes from './HeaderMegaMenu.module.css';
    
  export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
      
    return (
      <section className={classes.container}>
      <Box className ={classes.container_header}>
        <header className={classes.header}>
            
          <Group justify="space-between" h="100%">

            <div className={classes.container_logo}>
              <BackgroundImage className={classes.logo} src={logo}/>
              <h1>Partnership </h1>
            </div>
            <div  className={classes.container_menu}>
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link} >
                Inicio
              </a>           

              <a href="#" className={classes.link}>
                Como Funciona
              </a>
              <a href="#" className={classes.link}>
                Contato
              </a>
            </Group>
            <Group visibleFrom="sm">
              <Button variant="default" className={classes.button}>Entrar</Button>
              <Button className={classes.button}>Cadastre-se</Button>
            </Group>
            </div>
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
          
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Entrar</Button>
              <Button>Cadastre-se</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      </section>
    );
  }