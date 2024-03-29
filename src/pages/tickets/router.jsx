import React from 'react';

import { Route, Switch } from 'react-router-dom';

import MeusTickets from './meusTickets/index';

import MeusTicketsNovo from './meusTickets/novo';

import MeusTicketsVisualizar from './meusTickets/visualizar';

import TicketsSetor from './ticketsSetor/index';

import TicketsSetorVisualizar from './ticketsSetor/visualizar';

function Router(){
    
    return(
        <Switch>
            <Route exact path='/tickets/meus-tickets' component={ props => <MeusTickets {...props} />} />
            <Route exact path='/tickets/meus-tickets/novo' component={ props => <MeusTicketsNovo {...props} />} />
            <Route exact path='/tickets/meus-tickets/:id/visualizar' component={ props => <MeusTicketsVisualizar {...props} />} />
            
            <Route exact path='/tickets/tickets-setor' component={ props => <TicketsSetor {...props} />} />
            <Route exact path='/tickets/tickets-setor/:id/visualizar' component={ props => <TicketsSetorVisualizar {...props} />} />
        </Switch>
    )
    
}

export default Router;