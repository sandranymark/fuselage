import type { StoryFn, Meta } from '@storybook/react-webpack5';
import type { ComponentType } from 'react';
import { action } from 'storybook/actions';

import { Avatar, Icon, Box, Tag, Divider, SidebarBanner } from '../..';

import Sidebar, {
  SidebarItemContainer,
  SidebarItemActions,
  SidebarItemAction,
  SidebarFooter,
  SidebarSection,
  SidebarItem,
  SidebarSectionTitle,
  SidebarItemAvatar,
  SidebarItemTitle,
  SidebarItemSubtitle,
  SidebarItemWrapper,
  SidebarItemContent,
  TopBarAction,
  SidebarFooterHighlight,
  SidebarItemIcon,
} from '.';

export default {
  title: 'Sidebar/Sidebar',
  component: Sidebar,
  subcomponents: {
    SidebarItemAvatar: SidebarItemAvatar as ComponentType<any>,
    SidebarItemContent: SidebarItemContent as ComponentType<any>,
    SidebarItemContainer: SidebarItemContainer as ComponentType<any>,
    SidebarItemIcon: SidebarItemIcon as ComponentType<any>,
    SidebarItemSubtitle: SidebarItemSubtitle as ComponentType<any>,
    SidebarItemTitle: SidebarItemTitle as ComponentType<any>,
    SidebarItemWrapper: SidebarItemWrapper as ComponentType<any>,
    SidebarFooterHighlight: SidebarFooterHighlight as ComponentType<any>,
    SidebarItemActions: SidebarItemActions as ComponentType<any>,
    SidebarItemAction: SidebarItemAction as ComponentType<any>,
    SidebarFooter: SidebarFooter as ComponentType<any>,
    SidebarSectionTitle: SidebarSectionTitle as ComponentType<any>,
    SidebarItem: SidebarItem as ComponentType<any>,
    SidebarSection: SidebarSection as ComponentType<any>,
  },
} satisfies Meta<typeof Sidebar>;

export const Default: StoryFn<typeof Sidebar> = () => (
  <>
    <div className='rcx-sidebar'>
      <SidebarSection>
        <Avatar
          size={Sidebar.TopBar.Avatar.size}
          url={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
          }
        />
        <Sidebar.TopBar.Actions>
          <Sidebar.TopBar.Action icon='home' />
          <Sidebar.TopBar.Action icon='magnifier' />
          <Sidebar.TopBar.Action icon='globe' />
          <Sidebar.TopBar.Action icon='sort' />
          <Sidebar.TopBar.Action icon='edit-rounded' />
        </Sidebar.TopBar.Actions>
      </SidebarSection>
      <Sidebar.TopBar.ToolBox>
        <Sidebar.TopBar.Title>Title</Sidebar.TopBar.Title>
        <Sidebar.TopBar.Actions>
          <Sidebar.TopBar.Action success icon='phone' />
          <Sidebar.TopBar.Action icon='message-disabled' />
        </Sidebar.TopBar.Actions>
      </Sidebar.TopBar.ToolBox>
      <SidebarSection>
        <Sidebar.Section.Title>
          CallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallss
        </Sidebar.Section.Title>
        <Sidebar.TopBar.Actions>
          <Sidebar.TopBar.Action success icon='phone' />
          <Sidebar.TopBar.Action icon='message-disabled' />
        </Sidebar.TopBar.Actions>
      </SidebarSection>
      <Sidebar.Item>
        <SidebarItemAvatar>
          <Avatar
            size='x16'
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
        </SidebarItemAvatar>
        <SidebarItemContent>
          <SidebarItemWrapper>
            <SidebarItemIcon icon='lock' />
            <SidebarItemTitle>
              ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
              ishdfiuashdfiuas iuashdfiausdh
            </SidebarItemTitle>
          </SidebarItemWrapper>
        </SidebarItemContent>
        <SidebarItemContainer>
          <SidebarItemActions>
            <SidebarItemAction secondary success icon='phone' />
            <SidebarItemAction secondary danger icon='circle-cross' />
            <SidebarItemAction secondary info icon='trash' />
            <SidebarItemAction icon='phone' secondary />
          </SidebarItemActions>
        </SidebarItemContainer>
      </Sidebar.Item>
      <Sidebar.Item selected clickable>
        <SidebarItemAvatar>
          <Avatar
            size='x28'
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
        </SidebarItemAvatar>
        <SidebarItemContent>
          <SidebarItemWrapper>
            <SidebarItemIcon icon='balloon' />
            <SidebarItemTitle>
              ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
              ishdfiuashdfiuas iuashdfiausdh
            </SidebarItemTitle>
          </SidebarItemWrapper>
        </SidebarItemContent>
        <SidebarItemContainer>
          <SidebarItemActions>
            <SidebarItemAction secondary success icon='phone' />
            <SidebarItemAction secondary danger icon='circle-cross' />
            <SidebarItemAction secondary info icon='trash' />
            <SidebarItemAction icon='phone' secondary />
          </SidebarItemActions>
        </SidebarItemContainer>
      </Sidebar.Item>
      <Sidebar.Item clickable>
        <SidebarItemAvatar>
          <Avatar
            size='x36'
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
        </SidebarItemAvatar>
        <SidebarItemContent>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemIcon icon='lock' />
              <SidebarItemTitle>
                ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                ishdfiuashdfiuas iuashdfiausdh
              </SidebarItemTitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemSubtitle>
                ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                ishdfiuashdfiuas iuashdfiausdh
              </SidebarItemSubtitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
        </SidebarItemContent>
        <SidebarItemContainer>
          <SidebarItemActions>
            <SidebarItemAction secondary success icon='phone' />
            <SidebarItemAction secondary danger icon='circle-cross' />
            <SidebarItemAction secondary info icon='trash' />
            <SidebarItemAction icon='phone' secondary />
          </SidebarItemActions>
        </SidebarItemContainer>
      </Sidebar.Item>
    </div>
  </>
);

export const WithFooter: StoryFn<typeof Sidebar> = () => (
  <>
    <SidebarSection>
      <Avatar
        size={Sidebar.TopBar.Avatar.size}
        url={
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
        }
      />
      <Sidebar.TopBar.Actions>
        <Sidebar.TopBar.Action icon='home' />
        <Sidebar.TopBar.Action icon='magnifier' />
        <Sidebar.TopBar.Action icon='globe' />
        <Sidebar.TopBar.Action icon='sort' />
        <Sidebar.TopBar.Action icon='edit-rounded' />
      </Sidebar.TopBar.Actions>
    </SidebarSection>
    <Sidebar.TopBar.ToolBox>
      <Sidebar.TopBar.Title>Title</Sidebar.TopBar.Title>
      <Sidebar.TopBar.Actions>
        <Sidebar.TopBar.Action success icon='phone' />
        <Sidebar.TopBar.Action icon='message-disabled' />
      </Sidebar.TopBar.Actions>
    </Sidebar.TopBar.ToolBox>
    <SidebarSection>
      <Sidebar.Section.Title>
        CallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallssCallss
      </Sidebar.Section.Title>
      <Sidebar.TopBar.Actions>
        <Sidebar.TopBar.Action success icon='phone' />
        <Sidebar.TopBar.Action icon='message-disabled' />
      </Sidebar.TopBar.Actions>
    </SidebarSection>
    <Sidebar.Item>
      <SidebarItemAvatar>
        <Avatar
          size='x16'
          url={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
          }
        />
      </SidebarItemAvatar>
      <SidebarItemContent>
        <SidebarItemWrapper>
          <SidebarItemIcon icon='lock' />
          <SidebarItemTitle>
            ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
            ishdfiuashdfiuas iuashdfiausdh
          </SidebarItemTitle>
        </SidebarItemWrapper>
      </SidebarItemContent>
      <SidebarItemContainer>
        <SidebarItemActions>
          <SidebarItemAction secondary success icon='phone' />
          <SidebarItemAction secondary danger icon='circle-cross' />
          <SidebarItemAction secondary info icon='trash' />
          <SidebarItemAction icon='phone' secondary />
        </SidebarItemActions>
      </SidebarItemContainer>
    </Sidebar.Item>
    <Sidebar.Item selected clickable>
      <SidebarItemAvatar>
        <Avatar
          size='x28'
          url={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
          }
        />
      </SidebarItemAvatar>
      <SidebarItemContent>
        <SidebarItemWrapper>
          <SidebarItemIcon icon='balloon' />
          <SidebarItemTitle>
            ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
            ishdfiuashdfiuas iuashdfiausdh
          </SidebarItemTitle>
        </SidebarItemWrapper>
      </SidebarItemContent>
      <SidebarItemContainer>
        <SidebarItemActions>
          <SidebarItemAction secondary success icon='phone' />
          <SidebarItemAction secondary danger icon='circle-cross' />
          <SidebarItemAction secondary info icon='trash' />
          <SidebarItemAction icon='phone' secondary />
        </SidebarItemActions>
      </SidebarItemContainer>
    </Sidebar.Item>
    <Sidebar.Item clickable>
      <SidebarItemAvatar>
        <Avatar
          size='x36'
          url={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
          }
        />
      </SidebarItemAvatar>
      <SidebarItemContent>
        <SidebarItemContent>
          <SidebarItemWrapper>
            <SidebarItemIcon icon='lock' />
            <SidebarItemTitle>
              ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
              ishdfiuashdfiuas iuashdfiausdh
            </SidebarItemTitle>
          </SidebarItemWrapper>
        </SidebarItemContent>
        <SidebarItemContent>
          <SidebarItemWrapper>
            <SidebarItemSubtitle>
              ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
              ishdfiuashdfiuas iuashdfiausdh
            </SidebarItemSubtitle>
          </SidebarItemWrapper>
        </SidebarItemContent>
      </SidebarItemContent>
      <SidebarItemContainer>
        <SidebarItemActions>
          <SidebarItemAction secondary success icon='phone' />
          <SidebarItemAction secondary danger icon='circle-cross' />
          <SidebarItemAction secondary info icon='trash' />
          <SidebarItemAction icon='phone' secondary />
        </SidebarItemActions>
      </SidebarItemContainer>
    </Sidebar.Item>
    <SidebarFooter elevated>
      <SidebarFooterHighlight> 9 Chats enqeued </SidebarFooterHighlight>
      <SidebarSection>
        <SidebarSectionTitle>
          Voice ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
          ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
          ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
          ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
          ChannelVoice ChannelVoice ChannelVoice ChannelVoice ChannelVoice
          ChannelVoice ChannelVoice ChannelVoice Channel
        </SidebarSectionTitle>
        <SidebarItemActions>
          <TopBarAction icon='mic-off' />
          <TopBarAction icon='mic' />
          <TopBarAction icon='headphone-off' />
          <TopBarAction icon='headphone' />
        </SidebarItemActions>
      </SidebarSection>
      <SidebarItem>
        <SidebarItemAvatar>
          <Avatar
            size='x36'
            url={
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcEBgIDBQj/xAAuEAACAQQAAwcEAQUAAAAAAAABAgMABAUREiExBhMUIkFRYQcWcYGhFTJSgpH/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQBAP/EAB4RAAIBBQEBAQAAAAAAAAAAAAABAgMREiExE0HR/9oADAMBAAIRAxEAPwBuXuIkhBuMe5ib/AHQP49q4L3mLitryTLTSpOiHQI5k/HzXa/qbFOEudVTu1dumWvcTaNCZYZ7vU6g6LxqjOU/24dfs1Ouh9FnkMpd3Reeyx83hAxZZEhkdV9/MBrX71WGPvJcqrJBGveKATtuXXqNU0pu02bTHXD/AGvJAluyxxRd6F4x00o+NdKoVrjbzJdvVe1t5cVLc2ck8qjnohgpPtz2v7G6JtPQ2VJwjlcw+37mchpnK6GtIuv5NFWeTsLNPvxWTvpfjvOEfwKKzEVkSct2vscS/BIzSN0YRkeX81UpPqO8masJETu7OOccY4dswYFQeftv096XV5knuJGdm2T1+agvMXj8jEaHX905QihabvcbuS7X566mLWLwSY8PuRnk/u4eZ0deTl71Ef6hY+0yM88TzeNZY4luYwpVYyduOfrvhPTnr0pXSX9y5mCsyJMdyxxvwq599em+taItqCSNc90ChvZRUruUcT0JiO18Elpk7t8v41LWzacxkBSuvjQ/FFJayjDWrCTepAQ2vUH0oo/Jk3ovpwJJeVCP5CN+lFFaaMqy+nAyuChvrTI2kN9JAsi2ZOy4IBHMnkSCP+iqBexSWdxLazoUljJVlPUH2oorkV10pRc7b1zXb/hZOzuJvM86QWEXeELxOzHSIPcmiiiunVlF2RNTpRkrs//Z'
            }
          />
        </SidebarItemAvatar>
        <SidebarItemContent>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemIcon icon='balloon' />
              <SidebarItemTitle>
                aasdasda asdasdasda asdasdasdas
              </SidebarItemTitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
          <SidebarItemContent>
            <SidebarItemWrapper>
              <SidebarItemSubtitle>
                ddsfoasdhfiuashd ousadhfiuasdhfiuashd soduhfiuasdhfia
                ishdfiuashdfiuas iuashdfiausdh
              </SidebarItemSubtitle>
            </SidebarItemWrapper>
          </SidebarItemContent>
        </SidebarItemContent>
        <SidebarItemContainer>
          <SidebarItemActions>
            <SidebarItemAction secondary danger icon='phone-off' />
          </SidebarItemActions>
        </SidebarItemContainer>
      </SidebarItem>
    </SidebarFooter>
  </>
);

export const Admin: StoryFn<typeof Sidebar> = () => (
  <div className='rcx-sidebar'>
    <Box display='flex' is='header' pbs={16} pbe={8} pi={24}>
      <Box fontSize='p2' fontWeight='p2'>
        Administration
      </Box>
      <Box mi={8}>
        <Tag variant='featured'>Development</Tag>
      </Box>
    </Box>
    <Divider />
    <SidebarItem is='a' clickable href='#'>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='import' mi={4} size='x20' />
        Import
      </Box>
    </SidebarItem>
    <SidebarItem is='a' clickable href='#'>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='user' mi={4} size='x20' />
        Users
      </Box>
    </SidebarItem>
    <SidebarItem is='a' clickable href='#'>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='hashtag' mi={4} size='x20' />
        Rooms
      </Box>
    </SidebarItem>
    <SidebarItem is='a' clickable href='#'>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='cube' mi={4} size='x20' />
        Apps
      </Box>
    </SidebarItem>
  </div>
);

export const WithBanner: StoryFn<typeof Sidebar> = () => (
  <div className='rcx-sidebar'>
    <Box display='flex' is='header' pbs={16} pbe={8} pi={24}>
      <Box fontSize='p2' fontWeight='p2'>
        Administration
      </Box>
      <Box mi={8}>
        <Tag variant='featured'>Development</Tag>
      </Box>
    </Box>
    <Divider />
    <SidebarBanner
      text='This is a sidebar banner'
      description='Learn more'
      onClick={action('click')}
      onClose={action('click')}
    />
    <SidebarItem clickable>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='import' mi={4} size='x20' />
        Import
      </Box>
    </SidebarItem>
    <SidebarItem clickable>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='user' mi={4} size='x20' />
        Users
      </Box>
    </SidebarItem>
    <SidebarItem clickable>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='hashtag' mi={4} size='x20' />
        Rooms
      </Box>
    </SidebarItem>
    <SidebarItem clickable>
      <Box display='flex' justifyContent='center' pb={8}>
        <Icon name='cube' mi={4} size='x20' />
        Apps
      </Box>
    </SidebarItem>
  </div>
);

export const CustomBannerContent: StoryFn<typeof SidebarBanner> = () => (
  <SidebarBanner>
    <Box display='flex' justifyContent='space-between'>
      <Icon name='modal-warning' size='x20' mi={8} />
      <div>This is a customized banner content</div>
    </Box>
  </SidebarBanner>
);

export const BannerVariations: StoryFn<typeof SidebarBanner> = () => (
  <>
    <SidebarBanner text='This is a default banner variation' />
    <Divider />
    <SidebarBanner text='This is an info banner variation' variant='info' />
    <Divider />
    <SidebarBanner
      text='This is a success banner variation'
      variant='success'
    />
    <Divider />
    <SidebarBanner
      text='This is a warning banner variation'
      variant='warning'
    />
    <Divider />
    <SidebarBanner text='This is a danger banner variation' variant='danger' />
    <Divider />
    <SidebarBanner
      text='This is a banner with addon'
      addon={<Icon name='warning' color='danger' size='x24' />}
    />
    <Divider />
    <SidebarBanner
      text='This is a banner with addon and onClose'
      addon={<Icon name='warning' color='danger' size='x24' />}
      onClose={action('click')}
    />
  </>
);
