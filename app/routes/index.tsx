import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Index() {
  return (
    <div className='p-10'>
      <h1 className="text-3xl font-bold underline">
        Hello world! This is Tailwind Plus Chakra Plus Remix
      </h1>
      <Tabs className='p-10'>
        <TabList>
          <Tab>One1</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
