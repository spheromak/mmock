<template>
    <b-navbar toggleable="md" type="dark" variant="primary" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ name: 'RealTimeActivity'}">MMock Console</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
        <b-nav-item :to="{ name: 'RealTimeActivity'}">Realtime</b-nav-item>
        <b-nav-item :to="{ name: 'Search'}">Search</b-nav-item>
        <b-nav-item :to="{ name: 'Mapping'}">Mapping</b-nav-item>
        <b-nav-item :to="{ name: 'Recording'}">Recording</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            
            <b-nav-item v-b-modal.modal-about>About</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar>

</template>
