import React from 'react'
import '../styles/NavStyles.css';
import { Box, Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel
  } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

export default function SignIn() {
    const { isOpen, onOpen, onClose } = React.useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button className='sign-btn' onClick={onOpen}>
            <Box>
              <Image className='sign-img' src="https://www.sephora.com/img/ufe/icons/me32.svg" />
            </Box>
            <Box className='span-sign'>
              Sign In
            </Box>
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

