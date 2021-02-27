import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';

export const SidebarItem = [
    {
        icon: <MessageIcon/>,
        text: "Thread"
    },
    {
        icon: <InboxIcon/>,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon/>,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkIcon/>,
        text: "Save items"
    },
    {
        icon: <PeopleIcon/>,
        text: "Peoples & Groups"
    },
    {
        icon: <AppsIcon/>,
        text: "More"
    }
]