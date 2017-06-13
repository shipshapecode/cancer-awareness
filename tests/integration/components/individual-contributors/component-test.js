import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('individual-contributors', 'Integration | Component | individual contributors', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{individual-contributors}}`);

  assert.equal(this.$().text().trim().replace(/\s/g, '').substring(0, 50), 'TheTeamThiseffortwasthebrainchildofRobertWagnerfro');
});
