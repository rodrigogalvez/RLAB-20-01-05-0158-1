import { shallowMount } from '@vue/test-utils'
import Usuario from '@/components/Usuario.vue'

// Conjunto de pruebas:
describe('Pruebas del componente Usuario.vue', ()=>{

    it('Prueba: se pasa el nombre usuario como propiedad', ()=>{
        const wrapper = shallowMount(Usuario,{ propsData: { name: "Rodrigo" }});
        expect(wrapper.html()).toContain("Usuario Rodrigo");
    })

    test('El método activarUsuario, activa el usuario', () => {
        const wrapper = shallowMount(Usuario);
        expect(wrapper.vm.usuarioActivo).toBe(false);
        wrapper.vm.activarUsuario();
        expect(wrapper.vm.usuarioActivo).toBe(true);
    });


});