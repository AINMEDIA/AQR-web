import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { laborApi } from '@/lib/api';

interface LabourOpportunityFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function LabourOpportunityForm({ onSuccess, onCancel }: LabourOpportunityFormProps) {
  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    skills_required: '',
    location: '',
    duration: '',
    workers_available: 1,
    hourly_rate: '',
    currency: 'USD',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'number') {
      setForm(f => ({ ...f, [name]: value === '' ? '' : Number(value) }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      await laborApi.createLaborOpportunity({
        ...form,
        workers_available: Number(form.workers_available),
        hourly_rate: form.hourly_rate ? Number(form.hourly_rate) : undefined,
      });
      setSuccess(true);
      setForm({ title: '', category: '', description: '', skills_required: '', location: '', duration: '', workers_available: 1, hourly_rate: '', currency: 'USD' });
      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message || 'Failed to create labour opportunity');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="text-red-600 text-sm">{error}</div>}
{success && <div className="text-blue-600 text-sm">Labour opportunity created successfully!</div>}
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Input id="category" name="category" value={form.category} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" value={form.description} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="skills_required">Skills Required</Label>
        <Input id="skills_required" name="skills_required" value={form.skills_required} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" name="location" value={form.location} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="duration">Duration</Label>
        <Input id="duration" name="duration" value={form.duration} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="workers_available">Workers Available</Label>
        <Input id="workers_available" name="workers_available" type="number" min={1} value={form.workers_available} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="hourly_rate">Hourly Rate</Label>
        <Input id="hourly_rate" name="hourly_rate" type="number" min={0} value={form.hourly_rate} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="currency">Currency</Label>
        <Input id="currency" name="currency" value={form.currency} onChange={handleChange} />
      </div>
      <div className="flex gap-2 mt-4">
        <Button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create Labour Opportunity'}</Button>
        {onCancel && <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>}
      </div>
    </form>
  );
} 