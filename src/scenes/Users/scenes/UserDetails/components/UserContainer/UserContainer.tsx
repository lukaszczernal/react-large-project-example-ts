import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { State as UserState, getUser } from '@services/users/reducer';
import { User } from '@services/users/models';
import { Link } from 'react-router-dom';

interface OwnProps {
  userId: string;
}

interface StateProps {
  user?: User;
}

type Props = StateProps & DispatchProp<{}>;

interface State {
  data: {
    users: UserState;
  };
}

const UserContainer = (props: Props) => (
  <div>
    <div>
      <Link to="/users">Back to user list</Link>
    </div>

    {props.user && <span>{props.user.name}</span>}
  </div>
);

const mapStateToProps = ({ data: { users } }: State, ownProps: OwnProps) => ({
  user: getUser(users, ownProps.userId)
});

export default connect(mapStateToProps)(UserContainer);
